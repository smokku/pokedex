import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionStddevPopFieldsModelBase } from "./PokemonV2MovetargetdescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionStddevPopFieldsModel */
export interface PokemonV2MovetargetdescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionStddevPopFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionStddevPopFields, pokemonV2MovetargetdescriptionStddevPopFieldsModelPrimitives, PokemonV2MovetargetdescriptionStddevPopFieldsModelSelector } from "./PokemonV2MovetargetdescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovetargetdescriptionStddevPopFieldsModel = PokemonV2MovetargetdescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
