import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameMinFieldsModelBase } from "./PokemonV2GenerationnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameMinFieldsModel */
export interface PokemonV2GenerationnameMinFieldsModelType extends Instance<typeof PokemonV2GenerationnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameMinFieldsModel */
export { selectFromPokemonV2GenerationnameMinFields, pokemonV2GenerationnameMinFieldsModelPrimitives, PokemonV2GenerationnameMinFieldsModelSelector } from "./PokemonV2GenerationnameMinFieldsModel.base"

/**
 * PokemonV2GenerationnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2GenerationnameMinFieldsModel = PokemonV2GenerationnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
