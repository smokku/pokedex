import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameVarianceFieldsModelBase } from "./PokemonV2EncounterconditionnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameVarianceFieldsModel */
export interface PokemonV2EncounterconditionnameVarianceFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameVarianceFieldsModel */
export { selectFromPokemonV2EncounterconditionnameVarianceFields, pokemonV2EncounterconditionnameVarianceFieldsModelPrimitives, PokemonV2EncounterconditionnameVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionnameVarianceFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionnameVarianceFieldsModel = PokemonV2EncounterconditionnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
