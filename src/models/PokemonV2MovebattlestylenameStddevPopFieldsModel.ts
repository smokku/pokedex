import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameStddevPopFieldsModelBase } from "./PokemonV2MovebattlestylenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameStddevPopFieldsModel */
export interface PokemonV2MovebattlestylenameStddevPopFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameStddevPopFieldsModel */
export { selectFromPokemonV2MovebattlestylenameStddevPopFields, pokemonV2MovebattlestylenameStddevPopFieldsModelPrimitives, PokemonV2MovebattlestylenameStddevPopFieldsModelSelector } from "./PokemonV2MovebattlestylenameStddevPopFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovebattlestylenameStddevPopFieldsModel = PokemonV2MovebattlestylenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
