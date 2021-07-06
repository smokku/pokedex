import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameMaxFieldsModelBase } from "./PokemonV2ItemattributenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameMaxFieldsModel */
export interface PokemonV2ItemattributenameMaxFieldsModelType extends Instance<typeof PokemonV2ItemattributenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameMaxFieldsModel */
export { selectFromPokemonV2ItemattributenameMaxFields, pokemonV2ItemattributenameMaxFieldsModelPrimitives, PokemonV2ItemattributenameMaxFieldsModelSelector } from "./PokemonV2ItemattributenameMaxFieldsModel.base"

/**
 * PokemonV2ItemattributenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemattributenameMaxFieldsModel = PokemonV2ItemattributenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
