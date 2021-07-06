import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameMaxFieldsModelBase } from "./PokemonV2PokemoncolornameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameMaxFieldsModel */
export interface PokemonV2PokemoncolornameMaxFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameMaxFieldsModel */
export { selectFromPokemonV2PokemoncolornameMaxFields, pokemonV2PokemoncolornameMaxFieldsModelPrimitives, PokemonV2PokemoncolornameMaxFieldsModelSelector } from "./PokemonV2PokemoncolornameMaxFieldsModel.base"

/**
 * PokemonV2PokemoncolornameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemoncolornameMaxFieldsModel = PokemonV2PokemoncolornameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
