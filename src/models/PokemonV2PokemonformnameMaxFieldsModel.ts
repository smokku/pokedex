import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameMaxFieldsModelBase } from "./PokemonV2PokemonformnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameMaxFieldsModel */
export interface PokemonV2PokemonformnameMaxFieldsModelType extends Instance<typeof PokemonV2PokemonformnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameMaxFieldsModel */
export { selectFromPokemonV2PokemonformnameMaxFields, pokemonV2PokemonformnameMaxFieldsModelPrimitives, PokemonV2PokemonformnameMaxFieldsModelSelector } from "./PokemonV2PokemonformnameMaxFieldsModel.base"

/**
 * PokemonV2PokemonformnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonformnameMaxFieldsModel = PokemonV2PokemonformnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
