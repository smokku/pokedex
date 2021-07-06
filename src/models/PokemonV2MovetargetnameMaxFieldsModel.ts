import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameMaxFieldsModelBase } from "./PokemonV2MovetargetnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameMaxFieldsModel */
export interface PokemonV2MovetargetnameMaxFieldsModelType extends Instance<typeof PokemonV2MovetargetnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameMaxFieldsModel */
export { selectFromPokemonV2MovetargetnameMaxFields, pokemonV2MovetargetnameMaxFieldsModelPrimitives, PokemonV2MovetargetnameMaxFieldsModelSelector } from "./PokemonV2MovetargetnameMaxFieldsModel.base"

/**
 * PokemonV2MovetargetnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovetargetnameMaxFieldsModel = PokemonV2MovetargetnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
