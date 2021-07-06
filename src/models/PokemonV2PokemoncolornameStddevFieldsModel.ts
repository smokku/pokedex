import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameStddevFieldsModelBase } from "./PokemonV2PokemoncolornameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameStddevFieldsModel */
export interface PokemonV2PokemoncolornameStddevFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameStddevFieldsModel */
export { selectFromPokemonV2PokemoncolornameStddevFields, pokemonV2PokemoncolornameStddevFieldsModelPrimitives, PokemonV2PokemoncolornameStddevFieldsModelSelector } from "./PokemonV2PokemoncolornameStddevFieldsModel.base"

/**
 * PokemonV2PokemoncolornameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemoncolornameStddevFieldsModel = PokemonV2PokemoncolornameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
