import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectSumFieldsModelBase } from "./PokemonV2SupercontesteffectSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectSumFieldsModel */
export interface PokemonV2SupercontesteffectSumFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectSumFieldsModel */
export { selectFromPokemonV2SupercontesteffectSumFields, pokemonV2SupercontesteffectSumFieldsModelPrimitives, PokemonV2SupercontesteffectSumFieldsModelSelector } from "./PokemonV2SupercontesteffectSumFieldsModel.base"

/**
 * PokemonV2SupercontesteffectSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2SupercontesteffectSumFieldsModel = PokemonV2SupercontesteffectSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
