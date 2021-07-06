import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeStddevPopFieldsModelBase } from "./PokemonV2PokemontypeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeStddevPopFieldsModel */
export interface PokemonV2PokemontypeStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemontypeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeStddevPopFieldsModel */
export { selectFromPokemonV2PokemontypeStddevPopFields, pokemonV2PokemontypeStddevPopFieldsModelPrimitives, PokemonV2PokemontypeStddevPopFieldsModelSelector } from "./PokemonV2PokemontypeStddevPopFieldsModel.base"

/**
 * PokemonV2PokemontypeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemontypeStddevPopFieldsModel = PokemonV2PokemontypeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
