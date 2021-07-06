import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameStddevFieldsModelBase } from "./PokemonV2MovebattlestylenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameStddevFieldsModel */
export interface PokemonV2MovebattlestylenameStddevFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameStddevFieldsModel */
export { selectFromPokemonV2MovebattlestylenameStddevFields, pokemonV2MovebattlestylenameStddevFieldsModelPrimitives, PokemonV2MovebattlestylenameStddevFieldsModelSelector } from "./PokemonV2MovebattlestylenameStddevFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovebattlestylenameStddevFieldsModel = PokemonV2MovebattlestylenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
