import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameMaxFieldsModelBase } from "./PokemonV2MovebattlestylenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameMaxFieldsModel */
export interface PokemonV2MovebattlestylenameMaxFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameMaxFieldsModel */
export { selectFromPokemonV2MovebattlestylenameMaxFields, pokemonV2MovebattlestylenameMaxFieldsModelPrimitives, PokemonV2MovebattlestylenameMaxFieldsModelSelector } from "./PokemonV2MovebattlestylenameMaxFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovebattlestylenameMaxFieldsModel = PokemonV2MovebattlestylenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
