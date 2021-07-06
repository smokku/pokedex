import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextMinFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextMinFieldsModel */
export interface PokemonV2SupercontesteffectflavortextMinFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextMinFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextMinFields, pokemonV2SupercontesteffectflavortextMinFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextMinFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextMinFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2SupercontesteffectflavortextMinFieldsModel = PokemonV2SupercontesteffectflavortextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
