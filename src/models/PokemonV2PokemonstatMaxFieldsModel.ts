import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatMaxFieldsModelBase } from "./PokemonV2PokemonstatMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatMaxFieldsModel */
export interface PokemonV2PokemonstatMaxFieldsModelType extends Instance<typeof PokemonV2PokemonstatMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatMaxFieldsModel */
export { selectFromPokemonV2PokemonstatMaxFields, pokemonV2PokemonstatMaxFieldsModelPrimitives, PokemonV2PokemonstatMaxFieldsModelSelector } from "./PokemonV2PokemonstatMaxFieldsModel.base"

/**
 * PokemonV2PokemonstatMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonstatMaxFieldsModel = PokemonV2PokemonstatMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
