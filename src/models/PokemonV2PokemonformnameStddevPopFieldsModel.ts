import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameStddevPopFieldsModelBase } from "./PokemonV2PokemonformnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameStddevPopFieldsModel */
export interface PokemonV2PokemonformnameStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonformnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameStddevPopFieldsModel */
export { selectFromPokemonV2PokemonformnameStddevPopFields, pokemonV2PokemonformnameStddevPopFieldsModelPrimitives, PokemonV2PokemonformnameStddevPopFieldsModelSelector } from "./PokemonV2PokemonformnameStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonformnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonformnameStddevPopFieldsModel = PokemonV2PokemonformnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
