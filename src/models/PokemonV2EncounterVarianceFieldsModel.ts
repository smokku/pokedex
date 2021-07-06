import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterVarianceFieldsModelBase } from "./PokemonV2EncounterVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterVarianceFieldsModel */
export interface PokemonV2EncounterVarianceFieldsModelType extends Instance<typeof PokemonV2EncounterVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterVarianceFieldsModel */
export { selectFromPokemonV2EncounterVarianceFields, pokemonV2EncounterVarianceFieldsModelPrimitives, PokemonV2EncounterVarianceFieldsModelSelector } from "./PokemonV2EncounterVarianceFieldsModel.base"

/**
 * PokemonV2EncounterVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterVarianceFieldsModel = PokemonV2EncounterVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
