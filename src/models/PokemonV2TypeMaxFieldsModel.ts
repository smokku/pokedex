import { Instance } from "mobx-state-tree"
import { PokemonV2TypeMaxFieldsModelBase } from "./PokemonV2TypeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeMaxFieldsModel */
export interface PokemonV2TypeMaxFieldsModelType extends Instance<typeof PokemonV2TypeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeMaxFieldsModel */
export { selectFromPokemonV2TypeMaxFields, pokemonV2TypeMaxFieldsModelPrimitives, PokemonV2TypeMaxFieldsModelSelector } from "./PokemonV2TypeMaxFieldsModel.base"

/**
 * PokemonV2TypeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2TypeMaxFieldsModel = PokemonV2TypeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
