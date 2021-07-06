import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameStddevPopFieldsModelBase } from "./PokemonV2PokemoncolornameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameStddevPopFieldsModel */
export interface PokemonV2PokemoncolornameStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameStddevPopFieldsModel */
export { selectFromPokemonV2PokemoncolornameStddevPopFields, pokemonV2PokemoncolornameStddevPopFieldsModelPrimitives, PokemonV2PokemoncolornameStddevPopFieldsModelSelector } from "./PokemonV2PokemoncolornameStddevPopFieldsModel.base"

/**
 * PokemonV2PokemoncolornameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemoncolornameStddevPopFieldsModel = PokemonV2PokemoncolornameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
