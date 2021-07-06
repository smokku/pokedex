import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextSumFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextSumFieldsModel */
export interface PokemonV2SupercontesteffectflavortextSumFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextSumFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextSumFields, pokemonV2SupercontesteffectflavortextSumFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextSumFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextSumFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2SupercontesteffectflavortextSumFieldsModel = PokemonV2SupercontesteffectflavortextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
