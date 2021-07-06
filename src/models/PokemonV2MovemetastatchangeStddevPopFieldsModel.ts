import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeStddevPopFieldsModelBase } from "./PokemonV2MovemetastatchangeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeStddevPopFieldsModel */
export interface PokemonV2MovemetastatchangeStddevPopFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeStddevPopFieldsModel */
export { selectFromPokemonV2MovemetastatchangeStddevPopFields, pokemonV2MovemetastatchangeStddevPopFieldsModelPrimitives, PokemonV2MovemetastatchangeStddevPopFieldsModelSelector } from "./PokemonV2MovemetastatchangeStddevPopFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetastatchangeStddevPopFieldsModel = PokemonV2MovemetastatchangeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
