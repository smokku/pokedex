import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameStddevPopFieldsModelBase } from "./PokemonV2AbilitynameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameStddevPopFieldsModel */
export interface PokemonV2AbilitynameStddevPopFieldsModelType extends Instance<typeof PokemonV2AbilitynameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameStddevPopFieldsModel */
export { selectFromPokemonV2AbilitynameStddevPopFields, pokemonV2AbilitynameStddevPopFieldsModelPrimitives, PokemonV2AbilitynameStddevPopFieldsModelSelector } from "./PokemonV2AbilitynameStddevPopFieldsModel.base"

/**
 * PokemonV2AbilitynameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2AbilitynameStddevPopFieldsModel = PokemonV2AbilitynameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
