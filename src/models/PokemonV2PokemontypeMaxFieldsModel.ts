import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeMaxFieldsModelBase } from "./PokemonV2PokemontypeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeMaxFieldsModel */
export interface PokemonV2PokemontypeMaxFieldsModelType extends Instance<typeof PokemonV2PokemontypeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeMaxFieldsModel */
export { selectFromPokemonV2PokemontypeMaxFields, pokemonV2PokemontypeMaxFieldsModelPrimitives, PokemonV2PokemontypeMaxFieldsModelSelector } from "./PokemonV2PokemontypeMaxFieldsModel.base"

/**
 * PokemonV2PokemontypeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemontypeMaxFieldsModel = PokemonV2PokemontypeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
