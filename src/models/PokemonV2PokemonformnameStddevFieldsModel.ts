import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameStddevFieldsModelBase } from "./PokemonV2PokemonformnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameStddevFieldsModel */
export interface PokemonV2PokemonformnameStddevFieldsModelType extends Instance<typeof PokemonV2PokemonformnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameStddevFieldsModel */
export { selectFromPokemonV2PokemonformnameStddevFields, pokemonV2PokemonformnameStddevFieldsModelPrimitives, PokemonV2PokemonformnameStddevFieldsModelSelector } from "./PokemonV2PokemonformnameStddevFieldsModel.base"

/**
 * PokemonV2PokemonformnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformnameStddevFieldsModel = PokemonV2PokemonformnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
