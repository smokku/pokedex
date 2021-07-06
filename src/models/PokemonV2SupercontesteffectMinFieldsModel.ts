import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectMinFieldsModelBase } from "./PokemonV2SupercontesteffectMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectMinFieldsModel */
export interface PokemonV2SupercontesteffectMinFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectMinFieldsModel */
export { selectFromPokemonV2SupercontesteffectMinFields, pokemonV2SupercontesteffectMinFieldsModelPrimitives, PokemonV2SupercontesteffectMinFieldsModelSelector } from "./PokemonV2SupercontesteffectMinFieldsModel.base"

/**
 * PokemonV2SupercontesteffectMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2SupercontesteffectMinFieldsModel = PokemonV2SupercontesteffectMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
