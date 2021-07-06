import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodVarianceFieldsModelBase } from "./PokemonV2EncountermethodVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodVarianceFieldsModel */
export interface PokemonV2EncountermethodVarianceFieldsModelType extends Instance<typeof PokemonV2EncountermethodVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodVarianceFieldsModel */
export { selectFromPokemonV2EncountermethodVarianceFields, pokemonV2EncountermethodVarianceFieldsModelPrimitives, PokemonV2EncountermethodVarianceFieldsModelSelector } from "./PokemonV2EncountermethodVarianceFieldsModel.base"

/**
 * PokemonV2EncountermethodVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncountermethodVarianceFieldsModel = PokemonV2EncountermethodVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
