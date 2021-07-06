import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeStddevFieldsModelBase } from "./PokemonV2PokemontypeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeStddevFieldsModel */
export interface PokemonV2PokemontypeStddevFieldsModelType extends Instance<typeof PokemonV2PokemontypeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeStddevFieldsModel */
export { selectFromPokemonV2PokemontypeStddevFields, pokemonV2PokemontypeStddevFieldsModelPrimitives, PokemonV2PokemontypeStddevFieldsModelSelector } from "./PokemonV2PokemontypeStddevFieldsModel.base"

/**
 * PokemonV2PokemontypeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemontypeStddevFieldsModel = PokemonV2PokemontypeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
