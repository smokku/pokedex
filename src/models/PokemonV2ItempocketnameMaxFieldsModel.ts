import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameMaxFieldsModelBase } from "./PokemonV2ItempocketnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameMaxFieldsModel */
export interface PokemonV2ItempocketnameMaxFieldsModelType extends Instance<typeof PokemonV2ItempocketnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameMaxFieldsModel */
export { selectFromPokemonV2ItempocketnameMaxFields, pokemonV2ItempocketnameMaxFieldsModelPrimitives, PokemonV2ItempocketnameMaxFieldsModelSelector } from "./PokemonV2ItempocketnameMaxFieldsModel.base"

/**
 * PokemonV2ItempocketnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItempocketnameMaxFieldsModel = PokemonV2ItempocketnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
