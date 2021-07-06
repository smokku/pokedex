import { Instance } from "mobx-state-tree"
import { PokemonV2ItemMaxFieldsModelBase } from "./PokemonV2ItemMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemMaxFieldsModel */
export interface PokemonV2ItemMaxFieldsModelType extends Instance<typeof PokemonV2ItemMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemMaxFieldsModel */
export { selectFromPokemonV2ItemMaxFields, pokemonV2ItemMaxFieldsModelPrimitives, PokemonV2ItemMaxFieldsModelSelector } from "./PokemonV2ItemMaxFieldsModel.base"

/**
 * PokemonV2ItemMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemMaxFieldsModel = PokemonV2ItemMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
